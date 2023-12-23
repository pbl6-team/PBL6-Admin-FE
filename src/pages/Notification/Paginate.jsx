import { Button } from "@/components/ui/button";

export function Paginate(props) {
  return (
    <div className={props.className}>
      <div>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          ...
        </Button>
        <Button variant="outline" size="sm">
          10
        </Button>
        <Button variant="outline" size="sm">
          11
        </Button>
      </div>
    </div>
  );
}
