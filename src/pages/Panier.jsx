import React from 'react'

const Panier = () => {
  return (
    <div>
        <h1>recapitulatif de mon panier</h1>
        <div>
            <div>
                {/* Image of the product */}
            </div>
            <div>
                <div>
                    <div>
                        <p>Produits:</p>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>Livraisons:</p>
                        <p>{}</p>
                    </div>
                    <div>
                        <p>Total:</p>
                        <p>{}</p>
                    </div>
                    <button>VALIDER MA COMMANDE</button>
                </div>
                <div>
                    <p>Une question ?</p>
                    <p>Contactez-nous au 01 30 28 93 32</p>
                </div>
                <div>
                    <p>paiement ultra sécurisé avec:</p>
                    <img src="" alt="" />
                    <p>&lt; continuer mes achats</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Panier
