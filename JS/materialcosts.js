
const getroofMaterial = () =>[
    {
        material: "Stålplåt",
        vinklar: [
            {
                vinkel:'0-14',
                faktor: 1,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'15-20',
                faktor: 1.05,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function() {
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'21-30',
                faktor: 1.17,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function() {
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'31-40',
                faktor: 1.26,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function() {
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'41-50',
                faktor: 1.35,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function() {
                    return this.faktorMultiKvm + this.prisKvm
                }
            }
        ]
    },
    {
        material: "Aluminium",
        vinklar: [
            {
                vinkel:'0-14',
                faktor: 1,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 209,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'15-20',
                faktor: 1.05,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 209,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'21-30',
                faktor: 1.17,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 209,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'31-40',
                faktor: 1.26,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 209,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'41-50',
                faktor: 1.35,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 209,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            }
        ]
    },
    {
        material: "Rostfritt",
        vinklar:[
            {

                vinkel:'0-14',
                faktor: 1,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 397,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'15-20',
                faktor: 1.05,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 397,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'21-30',
                faktor: 1.17,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 397,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'31-40',
                faktor: 1.26,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 397,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'41-50',
                faktor: 1.35,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 397,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            }
        ]
    },
    {
        material: "Aluzink",
        vinklar: [
            {
                vinkel:'0-14',
                faktor: 1,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'15-20',
                faktor: 1.05,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'21-30',
                faktor: 1.17,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'31-40',
                faktor: 1.26,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'41-50',
                faktor: 1.35,
                timmPeng: 500,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 194,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            }
        ]
    },
    {
        material: "Zink Valsblank",
        vinklar:[
            {
                vinkel:'0-14',
                faktor: 1,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 366,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'15-20',
                faktor: 1.05,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 366,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'21-30',
                faktor: 1.17,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 366,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'31-40',
                faktor: 1.26,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 366,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'41-50',
                faktor: 1.35,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 366,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            }
        ]
    },
    {
        material: "Zink Förpatinerad",
        vinklar: [
            {
                vinkel:'0-14',
                faktor: 1,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 413,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'15-20',
                faktor: 1.05,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 413,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'21-30',
                faktor: 1.17,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 413,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'31-40',
                faktor: 1.26,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 413,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            },
            {
                vinkel:'41-50',
                faktor: 1.35,
                timmPeng: 575,
                faktorMultiKvm: function(){
                    return this.timmPeng * this.faktor
                },
                prisKvm: 413,
                totalPris: function(){
                    return this.faktorMultiKvm + this.prisKvm
                }
            }
        ]
    }
]

const getHinder = () => [
    {
        name: 'Stor skorsten',
        work: 7000,
        materialCost: 1250,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Liten skorsten',
        work: 4500,
        materialCost: 850,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Avluftstos',
        work: 1650,
        materialCost: 350,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Takfönster',
        work: 2500,
        materialCost: 500,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Ventilationshuv',
        work: 4250,
        materialCost: 750,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Taklucka',
        work: 4500,
        materialCost: 100,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Köksfläktshuv / Vent stor',
        work: 4250,
        materialCost: 750,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Takkupa mindre än 10 kvm',
        work: 10000,
        materialCost: 1000,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Takkupa större än 10 kvm',
        work: 19000,
        materialCost: 2000,
        total:function(){
            return this.work + this.materialCost
        }
    }
]

const getRoofSecurity = () => [
    {
        name: 'Takbrygga',
        work: 250,
        materialCost: 385,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Snörasskydd',
        work: 250,
        materialCost: 225,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Takstege',
        work: 250,
        materialCost: 315,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Skorstensstege',
        work: 250,
        materialCost: 315,
        total:function(){
            return this.work + this.materialCost
        }
    }
]

const getGarnish = () => [
    {
        name: 'Luftad nock',
        work: 150,
        materialCost: 350,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Vindskivor',
        work: 122,
        materialCost: 15,
        total:function(){
            return this.work + this.materialCost
        }
    }
]

const getWaterDrainage = () => [
    {
        name: 'Hängrännor',
        work: 250,
        materialCost: 250,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Stuprör',
        work: 250,
        materialCost: 250,
        total:function(){
            return this.work + this.materialCost
        }
    }
]

const getExtraHinder = () => [
    {
        name: 'Fotränna',
        work: 1250,
        materialCost: 650,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Ytterhörn fotränna',
        work: 2000,
        materialCost: 1500,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Nock',
        work: 500,
        materialCost: 0,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Takbrott',
        work: 1000,
        materialCost: 0,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: 'Vinkelränna',
        work: 560,
        materialCost: 90,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name: "Genzimrännor",
        work: 2400,
        materialCost: 600,
        total:function(){
            return this.work + this.materialCost
        }
    }
]

const getLogistics = () => [
    {
        name:"Transport / lyft",
        work:2400,
        materialCost:100,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name:"Container",
        work:2400,
        materialCost:100,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name:"Takpapp",
        work:25,
        materialCost:25,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name:"Byggnadsställning",
        work:10,
        materialCost:10,
        total:function(){
            return this.work + this.materialCost
        }
    },
    {
        name:"Rivning",
        work:100,
        materialCost:100,
        total:function(){
            return this.work + this.materialCost
        }
    }

]
