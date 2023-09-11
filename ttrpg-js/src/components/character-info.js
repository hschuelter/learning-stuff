import React from 'react';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';

import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

function stringify_class(words) {
	var w = [];
	for(var i = 0; i < words.length; i++) {
		w.push(words[i].name + ' ' + words[i].lvl);
	}
	return w.join(' / ');
}

function characterInfo(props) {
	console.log(props);
	return(
		<Grid container>
			<div class="flex dark-font" style={{margin: 5 + 'px'}}>
				<div class="item">
					<Avatar
						sx={{ width: 80, height: 80 }}>
						
					</Avatar>
				</div>
				<div class="item" style={{flex: 3}}>
					<div class="character-content">
						<div class="name"> 	{props.character_name} </div>
						<div class="title"> {props.race + ' ' + stringify_class(props.class)} </div>
						<LinearProgress> A </LinearProgress>
					</div>
				</div>
			</div>
				
				<Stack
					direction="row"
					divider={<Divider orientation="vertical" flexItem />}
					spacing={2}
					justifyContent="flex-end">
						<Button variant="contained"> Get XP </Button>
						<Button variant="contained"> Short Rest </Button>
						<Button variant="contained"> Long Rest </Button>
				</Stack>

		</Grid>
	)
}

export default characterInfo;