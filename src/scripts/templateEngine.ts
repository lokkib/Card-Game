export default function templateEngine(block: unknown) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('');
    }

    if (
        typeof block === 'string' ||
        typeof block === 'number' ||
        block === true
    ) {
        return document.createTextNode(block);
    }

    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment();

        block.forEach((element) => {
            fragment.appendChild(templateEngine(element));
        });

        return fragment;
    }

    type blockObject = Record<'tag' | 'content' | 'cls' | 'attrs', string>;
    const result = document.createElement((block as blockObject).tag);

    result.appendChild(templateEngine((block as blockObject).content));

    if ((block as blockObject).cls) {
        const classes = [].concat((block as blockObject).cls);
        classes.forEach((cls) => {
            result.classList.add(cls);
        });
    }

    if ((block as blockObject).attrs) {
        const keys = Object.keys((block as blockObject).attrs);

        keys.forEach((key) => {
            result.setAttribute(
                key,
                (block as blockObject).attrs[key as unknown as number]
            );
        });
    }

    return result;
}
