import bus from '../../images/Frame-1.png';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import train from '../../images/Group.png'

const travellingData = [
    {
        id: ":bike",
        passenger: "1",
        fares: [90,105,85,80, 120,150,180],
        name: "Bike",
        image: bike
    },
    {
        id: ":bus",
        passenger: "20",
        fares: [1190,2205,2285,2280, 3220,2250,3380],
        name: "Bus",
        image: bus
    },
    {
        id: ":car",
        passenger: "4",
        fares: [190,205,285,280, 320,1250,380],
        name: "Car",
        image: car
    },
    {
        id: ":train",
        passenger: "20",
        fares: [1190,2205,2285,2280, 3220,2250,3380],
        name: "Train",
        image: train
    },



];

export default travellingData;