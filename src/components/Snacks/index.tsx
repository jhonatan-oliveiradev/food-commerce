import { currencyFormat } from "../../helpers/currencyFormat";
import { SnackData } from "../../interfaces/SnackData";
import { SkeletonSnack } from "./SkeletonSnack";
import { Container } from "./styles";
import { FaPlus } from "react-icons/fa";

interface SnacksProps {
  snacks: SnackData[];
}

export default function Snacks({ snacks }: SnacksProps) {
  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => (
            <div key={snack.id} className='snack'>
              <h2>{snack.name}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{currencyFormat(snack.price)}</strong>
                <button type='button'>
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
    </Container>
  );
}
