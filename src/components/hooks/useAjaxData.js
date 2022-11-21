import axios from 'axios';
import { useEffect, useState } from 'react';

// Custom hook
const useAjaxData = (url, method) => {

	// items stocke les données renvoyées par la requête dans le state
	const [ items, setItems ] = useState([]);
	// loading sert de témoins de chargement
	const [ loading, setLoading ] = useState(false);
	
	// useEffect est utilisé pour exécuter son contenu au chargement du composant
	// ET à chaque fois que `url` ou `method` changent
	useEffect(() => {
		setLoading(true);
		axios({
			method,
			url,
		})
			.then(({ data }) => setItems(data))
			.catch(console.error)
			.finally(() => setLoading(false));
	}, [ url, method, setLoading, setItems ]);
	// Le tableau de dépendances peut rester vide
	// MAIS c'est une bonne pratique d'inscrire dans ce tableau
	// les éléments (internes au composant) qui sont utilisés dans le useEffect

	// On retourne dans un tableau les données renvoyées par la requête
	// Et l'état de chargement
	return [ items, loading ];

};

export default useAjaxData;
