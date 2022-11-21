
import Liste from 'src/components/Liste';
import PropTypes from 'prop-types';
import './style.scss';

const ReposResults = ({resultApi}) => {

  return(
    

    <div className="reposresults">
      {resultApi ? resultApi.map((result) => <Liste key={ result.id } { ...result } />) : ' '}
    </div>
)

  };


export default ReposResults;


ReposResults.propTypes = {
	resultApi: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
		})
	).isRequired,
};
 