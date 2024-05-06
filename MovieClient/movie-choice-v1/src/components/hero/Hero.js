import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';

const Hero = ({ movies }) => {
	return (
		<div className='movie-carousel-container'>
			<Carousel>
				{movies?.map((movie) => {
					return (
						<Paper>
							<div className='movie-card-container'>
								<div
									className='movie-card'
									style={{ '--img': `url(${movie.backdrops[0]})` }}>
									<div className='movie-detail'>
										<img src={movie.poster} alt={movie.title} />
									</div>
									<div className='movie-title'>
										<h4>{movie.title}</h4>
									</div>
								</div>
							</div>
						</Paper>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Hero;
