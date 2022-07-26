# NASA-APOD

Michael Lorton
July 25, 2022
## NASA Astronomy Photo of the Day

This is a fairly simple implementation of a viewer for NASA’s [APOD](https://github.com/nasa/apod-api), using the following tech-stack

* ReactJs
* Typescript
* Chakra UI
* Nextjs
* date-fns
* use-lilius (headless date-picker UI)

## Todo

It could be improved in the following ways:

* loading — currently, it displays a stock image of a black hole while it is retrieving the day’s photos, and there is a rather ugly reflow once the data arrives
* error-handling — there is no error handling at all right now.  Whatever happens happens
* date picker — I am not thrilled with the date picker; in particular, it can select days from the future
* general UI — it could benefit thoroughly from the ministrations of a skilled visual designer
