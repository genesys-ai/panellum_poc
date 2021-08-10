
const v = pannellum.viewer('panorama', {
    "type": "multires",
    "hfov": 100.0,
    "multiRes": {
        "basePath": "assets/images/multires_pano94",
        "path": "/%l/%s%y_%x",
        "fallbackPath": "/fallback/%s",
        "extension": "jpg",
        "tileResolution": 512,
        "maxLevel": 4,
        "cubeResolution": 2984
    }
});

// https://github.com/mpetroff/pannellum/issues/1019

const HEADING = 94.19

v.on('animatefinished', (e)=>{
    // console.log('current:', e)
    const yaw = e.yaw 
    // convert yaw in range [-180, 180] to [0, 360] 
    // such that 0 in [-180, 180] is same as 0 in [0, 360]
    const yaw360 = yaw < 0 ? yaw+360 : yaw;
    // shift by heading
    headingCurrent = (yaw360+HEADING)%360;

    console.log({currentYaw: yaw, currentHeading: headingCurrent})

})