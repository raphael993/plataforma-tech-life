const axios = require('axios');

async function getPostalCodeInfo(codigoPostal, pais) {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: `${codigoPostal}, ${pais}`,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    });

    if (response.data.status !== 'OK') {
      throw new Error(`Google Maps API error: ${response.data.status}`);
    }

    const result = response.data.results[0];
    const locality = result.address_components.find(component => 
      component.types.includes('locality') || component.types.includes('postal_town')
    );
    const adminArea = result.address_components.find(component => 
      component.types.includes('administrative_area_level_1')
    );

    return {
      localidade: locality ? locality.long_name : 'Não encontrada',
      estado: adminArea ? adminArea.long_name : 'Não encontrado',
      latitude: result.geometry.location.lat,
      longitude: result.geometry.location.lng
    };
  } catch (error) {
    console.error('Erro ao buscar informações do código postal:', error);
    return null;
  }
}

module.exports = { getPostalCodeInfo };