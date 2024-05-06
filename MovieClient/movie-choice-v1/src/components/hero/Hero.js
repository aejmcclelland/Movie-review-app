import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
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
								<div className='movie-card'>
									<div className='movie-detail'>
										<img src={movie.poster} alt={movie.title} />
									</div>
									<div className='movie-title'>
										<h2>{movie.title}</h2>
										<p>{movie.description}</p>
										<Button className='button'>Watch Now</Button>
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
