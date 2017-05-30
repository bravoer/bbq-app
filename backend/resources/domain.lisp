(in-package :mu-cl-resources)

(defparameter *supply-cache-headers-p* t
  "when non-nil, cache headers are supplied.  this works together with mu-cache.")
(setf *cache-model-properties-p* t)

;;;; define the resource

(define-resource subscription ()
  :class (s-prefix "bravoer:Subscription")
  :properties `((:name :string ,(s-prefix "bravoer:name"))
                 (:amount :int ,(s-prefix "bravoer:amount"))
                 (:vegetable :string ,(s-prefix "bravoer:vegetable"))
                 (:created :datetime ,(s-prefix "dcterms:created"))
                 (:modified :datetime ,(s-prefix "dcterms:modified")))
  :resource-base (s-url "http://data.bravoer.be/barbecue/id/subscriptions/")
  :on-path "subscriptions")
