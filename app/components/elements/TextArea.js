const TextArea = ({ children, className, ...rest }) => {
  return (
    <div>
        <textarea className={`${className}`} {...rest}>{children}</textarea>
    </div>
  );
};

export default TextArea;