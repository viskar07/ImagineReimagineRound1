import { Coordinate, Mouse } from "./typescript";






export const xy = (x: number, y: number): Coordinate => ({ x, y }),
 px = (value: number): string => `${value}px`,
 deg = (value: number): string => `${value}deg`,
 clamp = (value: number, min: number, max: number): number => Math.max(Math.min(value, max), min);

 export const updateMouse = (mouseX: number, mouseY: number,aproxyX:number , aproxyY:number) => {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    console.log();
    
    const mouse: Mouse = {
      position: xy(mouseX, mouseY),
      
      decimal: xy(mouseX / 660, mouseY / 400),
      multiplier: xy(1.3, 0.4),
      offset: xy(windowWidth * -0.12 , 400 * 0.1),
      modifiedPosition: xy(0, 0),
    };
    
    mouse.modifiedPosition.x = mouse.position.x - aproxyX 
    mouse.modifiedPosition.y = ((mouse.position.y - aproxyY) * mouse.multiplier.y < windowHeight/2 
                                    ? (mouse.position.y - aproxyY) * mouse.multiplier.y - 100 
                                    :(mouse.position.y - aproxyY) * mouse.multiplier.y+100 )
    return mouse;
  };

export const getWandStyles = (mouse: Mouse) => ({
  left: px(mouse.modifiedPosition.x),
  top: px(mouse.modifiedPosition.y),
  rotate: deg(mouse.decimal.x * 20 - 25),
});




export const updateMouse2 = (mouseX: number, mouseY: number, outerDiv: HTMLDivElement | null) => {
  if (!outerDiv) return { position: { x: mouseX, y: mouseY }, decimal: { x: 0, y: 0 }, multiplier: { x: 1.3, y: 0.4 }, offset: { x: 0, y: 0 }, modifiedPosition: { x: mouseX, y: mouseY } };
  
  const { offsetWidth: outerWidth, offsetHeight: outerHeight } = outerDiv;
  const { left: outerLeft, top: outerTop } = outerDiv.getBoundingClientRect();

  const mouse = {
    position: { x: mouseX - outerLeft, y: mouseY - outerTop },
    decimal: { x: (mouseX - outerLeft) / outerWidth, y: (mouseY - outerTop) / outerHeight },
    multiplier: { x: 1.3, y: 0.4 },
    offset: { x: outerWidth * -0.15, y: outerHeight * 0.1 },
    modifiedPosition: { x: 0, y: 0 }
  };

  mouse.modifiedPosition.x = mouse.position.x * mouse.multiplier.x + mouse.offset.x;
  mouse.modifiedPosition.y = mouse.position.y * mouse.multiplier.y + mouse.offset.y;

  return mouse;
};

export const getWandStyles2 = (mouse: any) => ({
  left: `${mouse.modifiedPosition.x}px`,
  top: `${mouse.modifiedPosition.y}px`,
  rotate: `${mouse.decimal.x * 20 - 10}deg`
});



export const revealImages = (mouseX: number, tiles: HTMLDivElement[],state:boolean) => {
  tiles.forEach(tile => {
    const dimensions = tile.getBoundingClientRect();
    // const windowHeight =  tile.
    const relativeMouseX = mouseX - dimensions.left;
    const mouseXAsDecimal = clamp(relativeMouseX / dimensions.width, 0, 1);

    const opacity = mouseXAsDecimal;
    const blur = 1 - mouseXAsDecimal;

    if (state) {
      tile.style.setProperty("--opacity", opacity.toString());
      tile.style.setProperty("--blur", blur.toString());
    }
  });
};