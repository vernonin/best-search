import React from 'react'
import Box from '@mui/material/Box';

import SkeletonItem from './SkeletonItem'


const ProductItem: React.FC<{
  title: string
}> = ({ title }) => {
	return (
		<Box
      sx={{
        width: '100%',
        height: 170,
        backgroundColor: '#fff'
      }}
      padding="15px 10px 0"
      boxSizing="border-box"
    >
      <p>{title}</p>
      {/* 面积图 */}
      {/* 其他 */}
    </Box>
	)
}

export { SkeletonItem }
export default ProductItem
