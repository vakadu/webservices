module.exports = {
    theme: {
        extend: {
            colors: {
                grey: {
                    none: 'rgba(0, 0, 0, 0)',
                    light: 'rgba(0, 0, 0, 0.2)',
                    shade: 'rgba(0, 0, 0, 0.5)',
                    bg: '#F0EBE3',
                    'dark-shade': '#a3a5a7'
                },
                dark: {
                    bg: '#222831',
                    drawer: '#31363c'
                },
                green: {
                    dark: '#1E8449'
                },
                red: {
                    dark: "#922B21"
                }
            },
            fontSize: {
                '8': '8px',
                '10': '10px',
                '11': '11px',
                '12': '12px',
                '13': '13px',
                '14': '14px',
                '15': '15px',
                '16': '16px',
                '18': '18px',
                '20': '20px',
                '22': '22px',
				'24': '24px',
                '28': '28px',
                '32': '32px',
                '42': '42px',
                '90': '90px'
            },
            lineHeight: {
                '10': '10px',
                '12': '12px',
                '14': '14px',
                '15': '15px',
                '16': '16px',
                '18': '18px',
                '20': '20px',
                '21': '21px',
				'24': '24px',
                '25': '25px',
                '28': '28px',
                '30': '30px',
                '32': '32px',
            },
			spacing: {
                '1': '1px',
                '1.5': '1.5px',
                '2': '2px',
                '2.5': '2.5px',
                '3': '3px',
				'4': '4px',
                '5': '5px',
				'6': '6px',
                '7': '7px',
                '8': '8px',
                '9': '9px',
                '10': '10px',
				'12': '12px',
				'14': '14px',
                '15': '15px',
                '16': '16px',
				'18': '18px',
				'19': '19px',
                '20': '20px',
				'21': '21px',
				'22': '22px',
                '24': '24px',
				'26': '26px',
				'28': '28px',
                '30': '30px',
				'32': '32px',
                '34': '34px',
				'35': '35px',
				'36': '36px',
                '40': '40px',
				'42': '42px',
                '44': '44px',
                '47': '47px',
                '48': '48px',
				'50': '50px',
                '54': '54px',
				'56': '56px',
				'64': '64px',
				'68': '68px',
				'72': '72px',
				'78': '78px',
                '80': '80px',
                '84': '84px',
                '92': '92px',
                '104': '104px',
				'112': '112px',
                '126': '126px',
                '136': '136px',
                '150': '150px',
				'160': '160px',
                '180': '180px',
                '250': '250px',
                '270': '270px',
                '316': '316px',
                '380': '380px',
                '420': '420px',
                '534': '534px',
                '730': '730px',
                '930': '930px',
                '70vh': '70vh',
                '56.25': '56.25%'
            },
            transitionDuration: {
                '0.3': '0.3s',
                '0.5': '0.5s',
                '0.6': '0.6s',
                '0.7': '0.7s',
                '1': '1s'
            },
            transitionTimingFunction: {
                'smooth-header': 'cubic-bezier(0.3, 0, 0.3, 1)',
            },
            animation: {
                headerAnimation: 'headerAnimate 0.8s cubic-bezier(0.3, 0, 0.3, 1) 0s forwards',
                'drip-expand': 'expand 300ms ease-in forwards',
				'drip-expand-large': 'expand-large 600ms ease-in forwards',
                'slide-up-down': 'slide-move-up-down 4s infinite both'
            },
            keyframes: {
                headerAnimate: {
                    '0%': { 
                        transform: 'translateZ(0) translateY(-100px)' 
                    },
                    '100%': { 
                        transform: 'translateZ(0) translateY(0px)' 
                    },
                },
                expand: {
					'0%': {
						opacity: 0,
						transform: 'scale(1)',
					},
					'30%': {
						opacity: 1,
					},
					'80%': {
						opacity: 0.5,
					},
					'100%': {
						transform: 'scale(30)',
						opacity: 0,
					},
				},
				'expand-large': {
					'0%': {
						opacity: 0,
						transform: 'scale(1)',
					},
					'30%': {
						opacity: 1,
					},
					'80%': {
						opacity: 0.5,
					},
					'100%': {
						transform: 'scale(96)',
						opacity: 0,
					},
                },
                'slide-move-up-down': {
                    from: {
                        transform: 'translateY(-6px)'
                    },
                    "50%": {
                        transform: 'translateY(6px)'
                    },
                    top: {
                        transform: 'translateY(-6px)'
                    }
                }
            },
            zIndex: {
                2: 2,
                3: 3,
                4: 4,
                5: 5
            },
            skew: {
                '10': '10deg',
            },
            letterSpacing: {
                '0.05': '0.05em',
                '0.07': '0.07em',
                '0.10': '0.10em'
            },
            borderWidth: {
                '2': '2px'
            },
            borderRadius: {
                4: '4px'
            },
            boxShadow: {
                1: '5px 5px rgba(0, 0, 0, 0.2)',
                2: '6px 14px 16px -12px rgba(0, 0, 0, 0.1)'
            },
            blur: {
                10: '10px'
            },
            transformOrigin: {
                'top-center': 'top center',
            },
        },
    },
    variants: {
        extend: {
           
        },
    },
    plugins: [],
};