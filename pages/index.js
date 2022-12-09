import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material'
import Layout from '../components/Layout';
import data from '../utils/data';

export default function Home() {
  // console.log(data)
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 my-4">
        {/* <Grid container spacing={3}>
          {data?.products?.map((product) => {
            <Grid item md={4} key={product.name}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>$ {product.price}</Typography>
                  <Button size='small' color='primary'>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          })}
        </Grid> */}
        {
          data?.products?.map((product) =>
            <div key={product.id} className="flex justify-center">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href={`/product/${product?.slug}`}>
                  <img className="rounded-t-lg" src={product.image} alt="" />
                </a>
                <div className="p-6">
                  <h5 className="text-green-900 text-xl font-medium mb-2">{product.name}</h5>
                  
                  <div className=''>
                  <p className="text-gray-700 mb-4 inline-block">
                    $$ <span className='font-semibold text-xl'>{product.price}</span>
                  </p>
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      data-mdb-ripple-duration="1000ms"
                      className="px-2 ml-2 py-1 bg-blue-600 
                  text-white font-medium text-xs leading-tight uppercase 
                  rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                  focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
                  duration-150 ease-in-out">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </Layout >

  )
}
