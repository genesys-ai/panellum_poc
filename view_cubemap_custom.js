const v =  pannellum.viewer('panorama', {
    "type": "cubemap",
    "cubeMap": [
        "assets/wonobo_cubemap_sample_response/CC_13042016_161143773_31661_4096x2048_454_f.jpg",
        "assets/wonobo_cubemap_sample_response/CC_13042016_161143773_31661_4096x2048_454_r.jpg",
        "assets/wonobo_cubemap_sample_response/CC_13042016_161143773_31661_4096x2048_454_b.jpg",
        "assets/wonobo_cubemap_sample_response/CC_13042016_161143773_31661_4096x2048_454_l.jpg",
        "assets/wonobo_cubemap_sample_response/CC_13042016_161143773_31661_4096x2048_454_u.jpg",
        "assets/wonobo_cubemap_sample_response/CC_13042016_161143773_31661_4096x2048_454_d.jpg",
    ]
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