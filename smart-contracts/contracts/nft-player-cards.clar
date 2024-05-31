(define-constant contract-owner tx-sender) 
(define-constant err-owner-only (err u100))
(define-constant err-not-token-owner (err u101))

(define-non-fungible-token players uint)

(define-map nft-owners uint principal)

(define-map nft-metadata uint
  {
    name: (string-utf8 256),
    description: (string-utf8 256),
    image-uri: (string-utf8 256)
  }
)

(define-data-var last-token-id uint u0)

(define-read-only (get-last-token-id)
    (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
    (ok (map-get? nft-metadata token-id))
)

(define-read-only (get-owner (token-id uint))
    (ok (map-get? nft-owners token-id))
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


(define-public (mint (name (string-utf8 256)) (description (string-utf8 256)) (image-uri (string-utf8 256))) 
  (begin
    ;; Calculate the new token ID
    (let ((token-id (+ (var-get last-token-id) u1)))

      ;; Mint the new NFT to the recipient
      (try! (nft-mint? players token-id tx-sender))
      (map-insert nft-owners token-id tx-sender)
      (map-insert nft-metadata token-id {name: name, description: description, image-uri: image-uri})

      ;; Update the last token ID
      (var-set last-token-id token-id)

      ;; Return the new token ID
      (ok token-id)
    )
  )
)

(define-public (transfer-to-deployer (mint-fee uint))
(begin 
    (try! (stx-transfer? mint-fee tx-sender 'ST3P58MSNPCSA2339QXFS4G9KF6DA6GVBMDRCK4RF))
    (ok mint-fee)
) 
)