import {Loader} from '@googlemaps/js-api-loader'

export const useGoogle = () => {
    const loader = new Loader({
        apiKey:'APIキーをいれる',
        version:'weekly',
        libraries:['places','drawing','geometry']
    })

    return (loader)
}
