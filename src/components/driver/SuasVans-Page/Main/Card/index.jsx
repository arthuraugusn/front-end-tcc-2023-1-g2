export const CardVans = ({ driver }) => {
  return (
    <>
      {driver.van.map((e) => {
        <p>{e.id}</p>;
      })}
    </>
  );
};
