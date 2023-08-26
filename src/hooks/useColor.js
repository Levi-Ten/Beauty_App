
function useColor(colorsBlock) {
  const colorResult = (colorsBlock.length === 0)? <div>No colors</div> : colorsBlock;
  
  return [colorResult]
}

export default useColor