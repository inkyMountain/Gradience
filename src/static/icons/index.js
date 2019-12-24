let importAll = requireContext => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../icons/', true, /\.svg$/));
} catch (error) {
  console.log('require.context error:', error);
}
