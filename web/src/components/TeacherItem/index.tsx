import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars0.githubusercontent.com/u/49723606?s=460&u=d9c981752012047af9217467221f123fa1495994&v=4"
					alt="Luan Souza"
				/>
				<div>
					<strong>Luan Souza</strong>
					<span>Física</span>
				</div>
			</header>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore neque
				fugiat atque laborum, excepturi non harum esse porro nesciunt nisi nam,
				magnam cumque nostrum explicabo vitae! Architecto praesentium qui fugit.
				<br /> <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eaque
				voluptatem ipsam reiciendis! Perferendis ea voluptas modi voluptate
				consequatur nisi, saepe, atque ad labore quaerat quidem cupiditate harum
				nihil tenetur.
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>R$ 50,00</strong>
				</p>
				<button type="button">
					<img src={whatsIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
};

export default TeacherItem;
