import useFetch from "../../hooks/useFetch";

function Stats() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (loading) return <div>Cargando datos...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Stats</h2>
      <p>El resultado es: {location.state?.resultado || "No hay resultado"}</p>
      <ul>
        {posts?.map((dato) => (
          <li key={dato.id}>{dato.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
