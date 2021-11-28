import { Avatar } from "../avatar";

export function Card({ superHero }) {
  return (
    <div>
      <Avatar image={superHero.images.sm} name={superHero.name} superHero={superHero} />
    </div>
  );
}
