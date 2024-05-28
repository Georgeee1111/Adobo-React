const importImages = async () => {
  const context = import.meta.glob("../assets/heroImages/*.jpg");
  const imagePaths = await Promise.all(
    Object.values(context).map((image) => image())
  );
  return imagePaths;
};

export default importImages;
