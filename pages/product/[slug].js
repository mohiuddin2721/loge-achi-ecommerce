import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import useStyles from '../../utils/styles';

export default function productScreen() {
    const router = useRouter();
    const classes = useStyles();
    const { slug } = router.query;
    console.log(slug)
    const product = data?.products?.find((a) => a?.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <Layout title={product.name}>
            <div className={classes.section}>
                <Link href='/' className='text-xl'>
                    Back to products
                </Link>
            </div>
        </Layout>
    )
};