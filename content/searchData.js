const convertImage = (id = 'bg', img) => {
    const el = document.createElement('canvas');
    el.id = `${id}`;
    el.width = img.width;
    el.height = img.height;
    document.body.appendChild(el)
    let src1 = cv.imread(img);
    let dst1 = new cv.Mat();
    cv.cvtColor(src1, src1, cv.COLOR_RGBA2GRAY, 0);
    cv.adaptiveThreshold(src1, dst1, 200, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 3, 2);
    // console.log('dst')
    cv.imshow(`${id}`, dst1);
}
//获取背景图片
setTimeout(() => {
    const bgImage = document.getElementById('s_lg_img');
    console.log('bg',bgImage)
    convertImage('bg', bgImage)
}, 1000)
