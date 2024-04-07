import React from "react";

export default function Recipe(props) {
  return (
    <div className="flex gap-x-4 items-center border rounded border-stone-900 px-4 py-2">
      <img src={props.image} alt={props.title} className="max-w-40 max-h-40" />
      <div className="flex flex-col gap-y-4">
        <h2 className="font-semibold text-xl text-slate-800">{props.title}</h2>
        <p
          className="text-sm text-slate-900"
          dangerouslySetInnerHTML={{
            __html: props.instructions,
          }}
        />
      </div>
    </div>
  );
}
