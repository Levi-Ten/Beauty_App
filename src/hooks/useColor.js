
function useColor(colorBlock) {
  const colorResult = (colorBlock.length === 0)? <div>No colors</div> : colorBlock;
  console.log(colorResult);
  return [colorResult]
}

export default useColor