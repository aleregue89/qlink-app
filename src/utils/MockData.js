const photos = {
    smartphone: {
        productPic: '/Users/alejandroregueira/qlink-app/public/byop.png/byop.png',
        name: "SmartPhone"
    },
    poblano_vle5: {
        productPic: 'public//Users/alejandroregueira/qlink-app/public/poblano_vle5.png.png',
        "Name": "Poblano VLE5"
    },
    quest5: {
        productPic: 'public/quest5.png',
        "Name": "ZTE Quest 5"
    },
    iphone_xz_max: {
        productPic: 'public/iphone_xs_max.png',
        "Name": "iPhone XS Max"
    },
    galaxy_a6: {
        productPic: 'public/galaxy_a6.png',
        "Name": "Samsung Galaxy A6"
    },
    galaxy_A10e: {
        productPic: 'public/galaxy_A10e.png',
        "Name": "Samsung Galaxy A10e",
    }
}



// another testing
export function _getPhotos () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...photos}), 1000)
    })
  }



//async
// getting photos

/*

const getPhotos = () => 
    new Promise((resolve, reject) => {
        if(!photos) {
            return setTimeout(
                () => reject(new Error("Photos not found")),
                250
            )
            
        }
        setTimeout(() => resolve(Object.values(photos)), 250 ) 
    })

export default getPhotos()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

const doGetPhotos = async () => {
    try {
        const result = await getPhotos()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

doGetPhotos()
*/