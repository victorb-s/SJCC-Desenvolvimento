import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownAZ,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import { ProjNavContainer, ControlsContainer, Input } from "./styles";
const ProjectNavigation = () => {
  return (
    <ProjNavContainer>
      <Input>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Pesquise pelo nome..." /*onChange={handleChange}*/
        />
      </Input>
      <ControlsContainer>
        <button /*onClick={handleSortAlph}*/>
          <FontAwesomeIcon icon={faArrowDownAZ} />
        </button>
        <button /*onClick={handleSortDate}*/>
          <FontAwesomeIcon icon={faCalendar} />
        </button>
      </ControlsContainer>
    </ProjNavContainer>
  );
};

export default ProjectNavigation;