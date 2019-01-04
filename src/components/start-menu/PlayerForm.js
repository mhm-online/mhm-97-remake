import React from "react";
import { Formik } from "formik";
import Button from "../form/Button";
import Input from "../form/Input";
import Label from "../form/Label";
import LabelDiv from "../form/LabelDiv";
import Field from "../form/Field";
import difficultyLevels from "../../data/difficulty-levels";

const PlayerForm = props => {
  const { player, advance } = props;

  return (
    <div>
      <Formik
        initialValues={player.toJS()}
        onSubmit={values => {
          advance(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field>
                <Label>Managerin nimi</Label>
                <Input id="name" value={values.name} onChange={handleChange} />
              </Field>

              <Field>
                <Label>Areenan nimi</Label>
                <Input id="name" value={values.arena} onChange={handleChange} />
              </Field>

              <Field>
                <LabelDiv>Vaikeustaso</LabelDiv>
                {difficultyLevels.map(dl => {
                  return (
                    <div key={dl.get("value")}>
                      <label>
                        <Input
                          type="radio"
                          name="difficulty"
                          value={dl.get("value")}
                          checked={values.difficulty === dl.get("value")}
                          onChange={handleChange}
                        />{" "}
                        {dl.get("name")} ({dl.get("description")})
                      </label>
                    </div>
                  );
                })}
              </Field>

              <Field>
                <Button type="submit">Eteenpäin</Button>
              </Field>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default PlayerForm;
