import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export const ListOfSchoolsDriver = ({ props }) => {
  const [optionChecked, setOptionChecked] = useState(false);

  const [otherOptions, setOtherOptions] = useState(false);

  useEffect(() => {
    if (optionChecked === true) {
      setOtherOptions(true);
    }
  }, [optionChecked]);

  if (props.responseErrorGet.code == 200) {
    return props.schoolDriver.schools.map((element) => {
      return (
        <>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id={`${element.id}`}
                  onChange={(e) => {
                    setOptionChecked(e.target.checked);
                    props.setIdEscolaMotorista(e.target.id);
                  }}
                  disabled={otherOptions}
                />
              }
              label={element.nome_escola}
            />
          </FormGroup>
        </>
      );
    });
  }
};
