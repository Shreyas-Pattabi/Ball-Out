
;; ;; title: players
;; ;; version:
;; ;; summary:
;; ;; description:

;; ;; traits
;; ;;

;; ;; token definitions
;; ;;

;; ;; constants
;; ;;

;; ;; data vars
;; ;;

;; ;; data maps
;; ;;

;; ;; public functions
;; ;;

;; ;; read only functions
;; ;;

;; ;; private functions
;; ;;

;; (define-constant contract-owner 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)
;; (define-constant err-owner-only (err u100))
;; (define-constant err-not-token-owner (err u101))

;; (define-non-fungible-token players uint)

;; (define-data-var last-token-id uint u0)

;; (define-read-only (get-last-token-id)
;;     (ok (var-get last-token-id))
;; )

;; (define-read-only (get-token-uri (token-id uint))
;;     (ok none)
;; )

;; (define-read-only (get-owner (token-id uint))
;;     (ok (nft-get-owner? players token-id))
;; )
;; (define-read-only (get-contract-owner (token-id uint))
;;     (ok contract-owner)
;; )
;; (define-read-only (get-tx-sender (token-id uint))
;;     (ok tx-sender)
;; )

;; (define-public (transfer (token-id uint) (sender principal) (recipient principal))
;;     (begin
;;         (asserts! (is-eq tx-sender sender) err-not-token-owner)
;;         (nft-transfer? players token-id sender recipient)
;;     )
;; )

;; (define-read-only (get-owner-nft (token-id uint))
;;   (nft-get-owner? players token-id)
;; )


;; (define-public (mint (recipient principal) (mint-fee uint))
;;   (begin
;;     ;; Transfer the mint fee to the contract owner
;;     (try! (stx-transfer? mint-fee tx-sender contract-owner))

;;     ;; Calculate the new token ID
;;     (let ((token-id (+ (var-get last-token-id) u1)))
      
;;       ;; Ensure the tx-sender is the recipient
;;       (asserts! (is-eq tx-sender recipient) (err u1000))

;;       ;; Mint the new NFT to the recipient
;;       (try! (nft-mint? players token-id recipient))

;;       ;; Update the last token ID
;;       (var-set last-token-id token-id)

;;       ;; Return the new token ID
;;       (ok token-id)
;;     )
;;   )
;; )
;; (define-public (write-message (message (string-utf8 500)))
;;     (begin
;;         (print message)
;;         (ok "Message printed")
;;     )
;; )

(define-constant contract-owner tx-sender) 
(define-constant err-owner-only (err u100))
(define-constant err-not-token-owner (err u101))

(define-non-fungible-token players uint)

(define-data-var last-token-id uint u0)

(define-read-only (get-last-token-id)
    (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
    (ok none)
)

(define-read-only (get-owner (token-id uint))
    (ok (nft-get-owner? players token-id))
)
(define-read-only (get-contract-owner (token-id uint))
    (ok contract-owner)
)
(define-read-only (get-tx-sender (token-id uint))
    (ok tx-sender)
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender sender) err-not-token-owner)
        (nft-transfer? players token-id sender recipient)
    )
)

(define-read-only (get-owner-nft (token-id uint))
  (nft-get-owner? players token-id)
)

;; (define-public (mint (recipient principal))
;;     (let
;;         (
;;             (token-id (+ (var-get last-token-id) u1))
;;         )
;;         (asserts! (is-eq tx-sender recipient) err-owner-only)
;;         (try! (nft-mint? players token-id recipient))
;;         (var-set last-token-id token-id)
;;         (ok token-id)
;;     )
;; )

;; (define-public (transfer-test)
;;     ;; (stx-transfer? u100 tx-sender ')
;;     ;; (stx-transfer? u500 tx-sender 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)
;; )

(define-public (mint (recipient principal) (mint-fee uint))
  (begin
    ;; Transfer the mint fee to the contract owner
    ;; (try! (stx-transfer? u100 tx-sender contract-owner))
    (try! (stx-transfer? mint-fee tx-sender 'ST3P58MSNPCSA2339QXFS4G9KF6DA6GVBMDRCK4RF))

    ;; Calculate the new token ID
    (let ((token-id (+ (var-get last-token-id) u1)))
      
      ;; Ensure the tx-sender is the recipient
      (asserts! (is-eq tx-sender recipient) (err u1000))

      ;; Mint the new NFT to the recipient
      (try! (nft-mint? players token-id recipient))

      ;; Update the last token ID
      (var-set last-token-id token-id)

      ;; Return the new token ID
      (ok token-id)
    )
  )
)

(define-public (write-message (message (string-utf8 500)))
    (begin
        (print message)
        (ok "Message printed")
    )
)