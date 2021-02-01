import {_getPhotos} from './MockData'

export function getInitialData() {
    return Promise.all([_getPhotos()])
        .then(([photos]) => ({
            photos,
        })
    )
}