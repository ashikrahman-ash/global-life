import React from "react";

const EventDetailsContent = ({ singleDetails }) => {
  
    const textEditorString = [];

    const arraytitle = singleDetails?.desc?.match(/<h(.)>.*?<\/h\1>/g);

    const para = singleDetails?.desc?.match(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/g);

    //   const arrayList = str.match(/<\s*li[^>]*>([^<]*)<\s*\/\s*li\s*>/g);

    // textEditorString.push(
    //     { arraytitle: arraytitle?.[0], para: para?.[0] },
    //     { arraytitle: arraytitle?.[1], para: para?.[1] },
    //     { arraytitle: arraytitle?.[2], para: para?.[2] },
    //     { arraytitle: arraytitle?.[3], para: para?.[3] },
    //     { arraytitle: arraytitle?.[4], para: para?.[4] },
    //     { arraytitle: arraytitle?.[5], para: para?.[5] }
    // );

    for (let i = 0; i < arraytitle?.length && para?.length; i++) {
        textEditorString.push({ arraytitle: arraytitle?.[i], para: para?.[i] });
    }

    return (
        <div className="blog-content-wrapper">
            {textEditorString?.map((str) => (
                <div className="row inner-wrapper border-bottom py-4" key={str?.arraytitle}>
                    <div className="col-lg-3 blog-details-title">
                        <h3 className="fs-4 fw-bold text-dark1">{str?.arraytitle?.replace(/(<([^>]+)>)/gi, "")}</h3>
                    </div>
                    <div className="col-lg-9 blog-details-pra">
                        <p className="fs-6 lh-26 text-dark2 ff-inter mb-0">{str?.para?.replace(/(<([^>]+)>)/gi, "")}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventDetailsContent;
