import * as React from 'react';

interface Props {
  title: string;
  content: string;
  commentsQts: number;
  tags: string[];
  // 7 - enum
category: Category;
}
export enum Category {
  JS = 'javascript',
  TS = 'typescript',
  JV = 'Java'

}
const Destructuring = ({ title, content, commentsQts, tags, category }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Qtd de comentários: {commentsQts}</p>
      <div>
        {tags.map(tag => (
          <span> #{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}
export default Destructuring;