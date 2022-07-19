import React from 'react'
import { connect } from 'react-redux'

const tempData = {
  image: '/img/biosim.png',
  name: 'Bioslim Probiotics',
  description: "The BioSlim supplement is packed with all the specific probiotic strains that have been scientifically proven to burn body fat and get your body in the best shape you've ever seen.\r\n\r\nAnd unlike a lot of probiotics on the market that will kick you out of ketosis and ruin all your hard work BioSlim works in synergy with the ketogenic diet to supercharge the fat burning effects.\r\n\r\nFat burning bacteria in BioSlim include:\r\n\r\n1. Bacillus Subtilus - Referred to as the “king of probiotics” due to its spore like form. In clinical trials, it was shown to “significantly reduce weight without changes in food intake”.\r\n\r\n2. Lactobacillus Rhamnosus - Another powerhouse probiotic, this is strain has been shown in studies to “significantly reduced fat mass and achieve sustainable weight loss”.\r\n\r\n3. Lactobacillus Plantarum - This special strain was found to “inhibit diet-induced weight gain”, and even more impressively, support healthy cholesterol and blood sugar levels.\r\n\r\n4. Bifidobacterium Breve - Which was found to “significantly lower body fat percentage and significantly lower waist circumference”, again, without changes to their diets.\r\n\r\nAll of which work together to rebalance your gut bacteria and help shed unwanted body fat.\r\n\r\nBioSlim is natural, free of additives and made right here in the USA."
}

let products = []

for (var i = 0; i < 9; i++) {
  products.push(tempData)
}

const ClientSupplements = ({ user }) => {

  return (
    <div className='client-supplements'>
      <div className='row align-items-center py-3 justify-content-between'>
        <div className='h5 col-md-6 font-weight-bold'>Supplements</div>
        <div className='text-right col-md-6'>
          <img alt='SETIMAGE' className='rounded-circle mr-2' width='40px' src={user.avatar} />
          <span>Hello, {user.name}</span>
        </div>
      </div>
      <div className='row bg-light-blue min-vh-100'>
        <div className='col-12 pt-3'>
          There are many supplements that can boost your keto results, here we take a look at our top picks.
        </div>
        {products.map((product, index) =>
          <ProductTile product={product} key={index} />
        )}
      </div>
    </div>
  )
}

const ProductTile = ({ product }) => {

  const [more, setMore] = React.useState(false)

  return (
    <div className='col-md-6 py-3 d-flex align-items-stretch'>
      <div className='row bg-white w-100'>
        <div className='col-md-4 py-3 text-center'>
          <img alt='SETIMAGE' src={product.image} className='img-fluid' />
        </div>
        <div className='col-md-8'>
          <div className='d-flex flex-column justify-content-between h-100'>
            <div>
              <div className='h5 text-black font-weight-bold pt-3 pb-1'>{product.name}</div>
              <div className='py-1' style={{ WebkitUserModify: 'read-write-plaintext-only' }}>
                {more ? product.description : (product.description.length > 150 ? `${product.description.slice(0, 150)}...` : product.description)}
              </div>
              <div className='py-1 text-black font-weight-bold font-12 cursor-pointer' onClick={() => setMore(!more)}>
                {more ? 'read less-' : 'read more+'}
              </div>
            </div>
            <div className='py-4'>
              <button className='btn btn-info btn-lg rounded-0'>I WANT THIS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {})(ClientSupplements)