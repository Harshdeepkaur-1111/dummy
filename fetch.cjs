async function get() {
  try {
    const res = await fetch("https://aurix1121gold.netlify.app/");
    const text = await res.text();
    console.log(text.substring(0, 500));
  } catch (e) {
    console.error(e);
  }
}
get();
