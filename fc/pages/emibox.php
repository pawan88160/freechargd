<div class="inner-calculator-continor">
    <div class="calculator-left">
        <h3>EMI Calculator</h3>
        <div id="lone-list" class="lone-list">
            <span class="lone-list-active lone-list-d">Personal Loan</span>
            <span class="lone-list-d" >Auto Loan</span>
            <span class="lone-list-d">Home Loan</span>
            <span class="lone-list-d">Others</span>
        </div>
        <div class="lone-slider-continor">
            <div class="lone-slider-continorinner ">
                <div class="lone-slide-upper-sidee">
                    <label for="">Loan Amount:</label>
                    <div class="lone-value">
                        <span>₹</span>
                        <span id="change_input_value">500000</span>
                    </div>
                </div>
                <div class="lone-slide-bottom-side">
                    <input id="loneinput" type="range" step="0.1" min="10000" max="2500000" value="1200000">
                    <div class="min-max">
                        <span>10 K</span>
                        <span>25 L</span>
                    </div>
                </div>
            </div>
            <div class="lone-slider-continorinner ">
                <div class="lone-slide-upper-sidee">
                    <label for="">Rate of Interest:</label>
                    <div class="lone-value">
                        <span>%</span>
                        <span id="change_input_valuet">7.0</span>
                    </div>
                </div>
                <div class="lone-slide-bottom-side">
                    <input id="loneinputt" type="range" step="0.1" min="2.5" max="20" value="7">
                    <div class="min-max">
                        <span>2.5 %</span>
                        <span>20 %</span>
                    </div>
                </div>
            </div>
            <div class="lone-slider-continorinner ">
                <div class="lone-slide-upper-sidee">
                    <label for="">Loan Tenure: <span> <select id="selectatg" name="" id="">
                                <option value="In Months">In Months</option>
                                <option value="In Years">In Years</option>
                            </select></label>
                    <div class="lone-value">
                        <span><img src="image/calendar_blue.png" alt=""></span>
                        <span id="change_input_valuett">60</span>
                    </div>
                </div>
                <div class="lone-slide-bottom-side">
                    <input id="loneinputtt" type="range" step="1" min="1" max="120" value="1">
                    <div class="min-max">
                        <span>1</span>
                        <span id="m_Y-max_value">120 </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="calculator-right">
        <div class="emi-detils">
            <div class="emi_amount">
                <h3>Loan EMI</h3>
                <span id="month_emi">9900.6</span>
            </div>
            <div class="emi_principal txt_value">
                <span>Principal Amount</span>
                <span id="change_input_value-right">500000</span>
            </div>
            <div class="intrast_amount txt_value">
                <span>Interest Amount</span>
                <span id="total_intrast_amount">94036</span>
            </div>
            <div class="total_amount txt_value">
                <span>Total Amount Payable</span>
                <span id="total_intrast_amount-value">594036.0</span>
            </div>
            <div class="pie-chart">
                <canvas role="img" height="200" width="200"></canvas>
            </div>
        </div>
        <div class="emi-detils-S">
            <div class="emi-detils-S-inner">
                <div>
                    <p>
                        Learn more about your interest schedules
                    </p>
                </div>
                <button>
                    View Details <span>></span>
                </button>
            </div>
            <p>This is an indicative tool to help calculate loan EMI. Loan category, maximum loan amount, loan tenure and rate of interest may vary on Freecharge.</p>
        </div>
    </div>
</div>