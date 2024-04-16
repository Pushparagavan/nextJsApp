import React from "react";

const Blog = (props: any) => {
  const { params } = props;

  console.log("params.id", params.id);
  const blogs = [
    {
      id: 1,
      name: "Blog one"
    },
    {
      id: 2,
      name: "Blog two"
    },
    {
      id: 3,
      name: "Blog three"
    }
  ];

  return (
    <div>
      <ul>
        {blogs
          .filter((blog) => blog.id == params.id)
          .map((blog) => {
            return <li key={blog.id}>{blog.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Blog;
