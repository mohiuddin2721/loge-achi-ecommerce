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
      <div>
        {/* <h1>Products</h1>
        <ul>
          <li>list-1</li>
          <li>list-2</li>
          <li>list-3</li>
        </ul> */}
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
            data?.products?.map((product) => <div key={product.id}  className='grid grid-cols-4 gap-4'>
              <h1>{product.name}</h1>
              <p>{product.price}</p>
            </div>
            )
          }
      </div>
    </Layout>

  )
}
