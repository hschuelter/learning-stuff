import words from './data/words.json'
import './App.css';

/* Material UI */
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';

/* Custom UI */
import Proficiency from './components/proficiency';
import Skill from './components/skills';
import Button1 from './components/button';
import StatItem from './components/statItem';
import Item from './components/item';
import CharacterInfo from './components/character-info';

import './css/style.css';
import './css/general.css';
import './bootstrap/css/bootstrap-grid.css';


function translateProficiency(lvl) {
	return Math.ceil(lvl/4) + 1;
}

function translateStats(stat) {
	return Math.floor((stat - 10)/2);
}

function stringify(num) {

	if(num > 0) num = '+' + num.toString();
	else num = num.toString();

	return num;
}


function App() {
	const menuId = 'primary-search-account-menu';
	const mobileMenuId = 'primary-search-account-menu-mobile';

	var info = {
		character_name: 'Thalia Falkner',
		character_race: 'Human', 
		character_class: [
			{ 
				name: 'Bard',
				lvl: 2
			}, 
			{ 
				name: 'Fighter',
				lvl: 1
			}
		]
	}

	var stats = {
		str: 8,
		dex: 10,
		con: 12,
		int: 14,
		wis: 16,
		cha: 18,
		lvl: 5,
		xp: 1000,
		inspiration: 1,
		size: 'Medium',
		total_health: 20,
		current_health: 16,
		temp_health: 5,
		ac: 16,
		speed: 25
	};



	return (
	<div className="App">
		<head>
			<meta charset="utf-8" />
			<title>D&D 5e Character Sheet</title>
			<link rel="icon" href="img/dnd-icon.png" />
			<link rel="stylesheet" href="bootstrap/css/bootstrap-grid.css" />
		</head>
		<AppBar position="static">
			Teste
		</AppBar>

		<div class="content">
			<Paper class="column border" elevation={3}> 
				<CharacterInfo  
					character_name={info.character_name}
					race={info.character_race}
					class={info.character_class} />
			</Paper>
		</div>	



		<div class="content">		
			<Paper class="column border">
				<div class="item-column">

					<div class="row center light-font">
						<Button variant="outlined"> {'Level ' + stats.lvl} </Button>
						{/* <Button1 title={'Level ' + stats.lvl} /> */}
						<Button1 title='Short rest' />
						<Button1 title='Long rest' />
					</div>

					<div class="large-row dark-font">
						<Item value={stats.xp + ' xp'} 	description={words.DESC_EXP} flex={1} />
						<Item value={stats.inspiration} description={words.DESC_INS} flex={1} />
						<Item value={stats.size} 		description={words.DESC_SIZ} flex={1} />
					</div>

					<div class="combat-row dark-font">
						<Item 	value={stats.current_health + '/' + stats.total_health} 
								description={words.DESC_HLT} 
								flex={2}/>
						<Item value={stats.temp_health} description={words.DESC_THL} flex={1}/>
					</div>

					<div class="large-row dark-font">
						<Item value={stats.ac} description={words.DESC_ARM} flex={1}/>
						<Item value={translateStats(stats.dex)} description={words.DESC_INI} flex={1}/>
						<Item value={stats.speed + ' ft.'} description={words.DESC_SPE} flex={1}/>
					</div>

					<div class="large-row dark-font border light-blue" style={{padding: 3 + 'px'}}>
						<StatItem stat={stats.str} description={words.SMALL_STR} />
						<StatItem stat={stats.dex} description={words.SMALL_DEX} />
						<StatItem stat={stats.con} description={words.SMALL_CON} />
						<StatItem stat={stats.int} description={words.SMALL_INT} />
						<StatItem stat={stats.wis} description={words.SMALL_WIS} />
						<StatItem stat={stats.cha} description={words.SMALL_CHA} />
					</div>

					<div class="large-row dark-font light-blue border">
						<div class="item">

							<div class="description"> {words.DESC_FEA} </div>
						</div>
					</div>

				</div>


				<div class="item-column dark-font border light-blue">
					<Proficiency name={words.PROF_BON} bonus={translateProficiency(stats.lvl)} />
					<hr />
					
					<Skill name={words.STAT_STR} bonus={stats.str} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.STAT_DEX} bonus={stats.dex} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.STAT_CON} bonus={stats.con} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.STAT_INT} bonus={stats.int} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.STAT_WIS} bonus={stats.wis} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.STAT_CHA} bonus={stats.cha} prof={translateProficiency(stats.lvl)} />

					<div class="skill-category"> Saving throws </div>
					<hr />

					<Skill name={words.SKILL_ACR} bonus={stats.dex} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_ANI} bonus={stats.wis} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_ARC} bonus={stats.int} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_ATH} bonus={stats.str} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_DEC} bonus={stats.cha} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_HIS} bonus={stats.int} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_INS} bonus={stats.wis} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_INT} bonus={stats.cha} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_INV} bonus={stats.int} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_MED} bonus={stats.wis} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_NAT} bonus={stats.int} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_PRC} bonus={stats.wis} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_PRF} bonus={stats.cha} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_PRS} bonus={stats.cha} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_REL} bonus={stats.int} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_SOH} bonus={stats.dex} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_STE} bonus={stats.dex} prof={translateProficiency(stats.lvl)} />
					<Skill name={words.SKILL_SUR} bonus={stats.wis} prof={translateProficiency(stats.lvl)} />

					<div class="skill-category"> Skills </div>

				</div>
			</Paper>

			<Paper class="column border"> C </Paper>
		</div>
	</div>
	);
}

export default App;
