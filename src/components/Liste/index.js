
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';


const Liste = ({ id, name, owner, full_name, description, html_url}) => {
	


	return (
		<article className="articleClass">
      <img alt="avatar" src={owner.avatar_url}></img>
      <p className="fullName"> {full_name}</p>
					<p className="name"> {name} </p>
          <p className="id"> {id} </p>
          <p className="description"> {description} </p>
          <a href={html_url} className="linkRepos">Le lien du repos ici</a>
         

          
          
          

		</article>
	);
};

export default  Liste;

Liste.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,

 

};
