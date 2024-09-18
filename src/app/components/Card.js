export default function Card({ id, title, description, onButtonClick }) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 mt-3 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div>{title}</div>
      <div>{description}</div>

      <div
        className="text-sm text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-gray-700 rounded-lg cursor-pointer"
        onClick={() => onButtonClick(id)}
      >
        Próxima Etapa
      </div>
    </div>
  );
}
