
const addWaterMarkOnResize = () =>
{
    waterMarkStr = '';
    fixedContainer = document.querySelector('.waterdrop-container');
    console.log(`fixed contaner = ${fixedContainer}`)

    waterMarkStr += `
        <div class="waterdrop">
            <img src="images/logo png.png">
        </div>`;

    fixedContainer.innerHTML = waterMarkStr;

    let box = document.querySelector('.waterdrop');
    let waterMarkWidth = box.offsetWidth;
    let waterMarkHeight = box.offsetHeight;
    viewPorHeight = window.innerHeight;

    numberOfDivs = Math.ceil(viewPorHeight / waterMarkHeight);

    waterMarkStr = fixedContainer.innerHTML;
    for (let i=0; i<numberOfDivs-1; i++) {
        waterMarkStr += `
        <div class="waterdrop">
            <img src="images/logo png.png">
        </div>`;

        fixedContainer.innerHTML = waterMarkStr;
    }
}

window.addEventListener('resize', addWaterMarkOnResize);
addWaterMarkOnResize();