import React from 'react'
import Skeleton from '@mui/material/Skeleton'

const SkeletonItem: React.FC = () => {
	return (
		<div>
			<Skeleton animation="wave" width="70%" />
			<Skeleton animation="wave" width="40%" />
			<Skeleton animation="wave" variant="rectangular" height={134} />
		</div>
	)
}

export default SkeletonItem