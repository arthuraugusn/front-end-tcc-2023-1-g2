export const ListOfSchoolsDriver = ({ props }) => {
  if (props.responseErrorGet.code == 200) {
    return props.schoolDriver.schools.map((e) => {
      return (
        <>
          <p>{e.nome_escola}</p>
        </>
      );
    });
  }
};
